import React, { FC } from "react";
import {
  View,
  Text,
  PDFDownloadLink,
  StyleSheet,
  Image,
  Page,
  Document,
  Font,
} from "@react-pdf/renderer";
import { IItem } from "@/types/IItem";

interface Props {
  items: IItem[];
}

const PDFDoc: FC<Props> = ({ items }) => {
  Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
  });

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
      padding: "5px",
    },
    tableHeaderImageCell: {
      width: "25%",
      fontWeight: "bold",
      fontSize: "12px",
    },
    tableHeaderCell: {
      width: "25%",
      fontWeight: "bold",
      fontSize: "12px",
      textAlign: "center",
    },
    tableCell: {
      width: "25%",
      fontSize: "10px",
      textAlign: "center",
    },
    image: {
      width: "95px",
      height: "75px",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeaderImageCell}>Изображение</Text>
          <Text style={styles.tableHeaderCell}>Название</Text>
          <Text style={styles.tableHeaderCell}>Стоимость</Text>
          <Text style={styles.tableHeaderCell}>Количество</Text>
        </View>
        {items.map((b) => (
          <View key={b._id} style={styles.tableRow}>
            <View style={styles.tableHeaderCell}>
              <Image src={b.image} style={styles.image} />
            </View>
            <Text style={styles.tableCell}>{b.name}</Text>
            <Text style={styles.tableCell}>{b.price}</Text>
            <Text style={styles.tableCell}>{b.count}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default PDFDoc;
