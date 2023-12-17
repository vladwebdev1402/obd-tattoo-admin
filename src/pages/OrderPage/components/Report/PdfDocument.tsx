import { FC, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Page,
  Document,
  Font,
} from "@react-pdf/renderer";
import { IBasketItem, IOrder } from "@/types/IOrder";

interface Props {
  orders: IOrder[];
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "10px",
    fontFamily: "Roboto",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
    alignItems: "center",
    padding: "10px 5px",
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  tableMailHeaderCell: {
    flex: 2,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
    textAlign: "center",
  },
  tableMailCell: {
    flex: 2,
    fontSize: 10,
    textAlign: "center",
  },
  total: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
});

const PdfDocument: FC<Props> = ({ orders }) => {
  const allOrdersPrice = useMemo(() => {
    const allPrice = orders.reduce<number>((acc, order) => {
      return acc + order.allPrice;
    }, 0);
    return allPrice;
  }, [orders]);

  Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeaderCell}>ФИО</Text>
          <Text style={styles.tableHeaderCell}>Адрес</Text>
          <Text style={styles.tableMailHeaderCell}>Эл. почта</Text>
          <Text style={styles.tableHeaderCell}>Корзина</Text>
          <Text style={styles.tableHeaderCell}>Цена</Text>
          <Text style={styles.tableHeaderCell}>Номер заказа</Text>
        </View>
        {orders.map((order) => (
          <View key={order._id} style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {order.contacts.surname} {order.contacts.name}{" "}
              {order.contacts.patroname}
            </Text>
            <Text style={styles.tableCell}>
              {order.contacts.city.name}, ул. {order.contacts.street.name}
            </Text>
            <Text style={styles.tableMailCell}>{order.contacts.mail}</Text>
            <View style={styles.tableCell}>
              {order.basket.map((bi, idx) => (
                <Text key={idx}>
                  {bi.item.name}, {bi.count} шт
                </Text>
              ))}
            </View>
            <Text style={styles.tableCell}>
              {order.allPrice.toLocaleString("ru")}
            </Text>
            <Text style={styles.tableCell}>{order.number}</Text>
          </View>
        ))}
        <View style={styles.total}>
          <Text>
            Стоимость всех заказов: {allOrdersPrice.toLocaleString("ru")}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
