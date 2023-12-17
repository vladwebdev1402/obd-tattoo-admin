import ReportContainer from "@/components/ReportContainer/ReportContainer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useRef, useEffect, useState } from "react";
import PDFDoc from "./PDFDoc";
import Filters from "./Filters";
import { useFetch } from "@/hooks/useFetch";
import { CrudApi } from "@/API";
import { GenerateItemParams, IItem, IItemParams } from "@/types/IItem";
import st from "./st.module.scss";
import { CrateParamsFromFilter } from "../../utils/CreateParamsFromFiltes";
const Report = () => {
  const [filters, setFilters] = useState<IItemParams>(GenerateItemParams());
  const { fething, data, error, isLoadingComplete } = useFetch(async () => {
    const response = await CrudApi.getAll<IItem>(
      "/item",
      CrateParamsFromFilter(filters)
    );
    return response.data;
  });

  const MyDoc = () => <PDFDoc items={data} />;
  const ref = useRef<HTMLParagraphElement>(null);

  const onReport = () => {
    if (ref.current && data.length > 0) ref.current.click();
  };

  const onGet = () => {
    fething();
  };

  return (
    <ReportContainer onGet={onGet} onReport={onReport}>
      <Filters filters={filters} setFilters={setFilters} />
      {data.length === 0 && !error && isLoadingComplete && (
        <div className={st.report__msg}>
          Массив данных пуст. Запросите данные или смените фильтры для
          формирования отчёта
        </div>
      )}
      {data.length > 0 && !error && isLoadingComplete && (
        <div className={st.report__msg}>
          Данные успешно получены. Отчёт сформирован. Можете скачать
        </div>
      )}

      {!isLoadingComplete && (
        <div className={st.report__msg}>Загрузка данных</div>
      )}

      {isLoadingComplete && error && (
        <div className={st.report__msg}>
          При загрузке данных произошла ошибка
        </div>
      )}
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            ""
          ) : (
            <p ref={ref} style={{ display: "none" }}>
              пук няф
            </p>
          )
        }
      </PDFDownloadLink>
    </ReportContainer>
  );
};

export default Report;
