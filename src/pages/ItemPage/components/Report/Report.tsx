import ReportContainer from "@/components/ReportContainer/ReportContainer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useRef, useState } from "react";
import PDFDoc from "./PDFDoc";
import Filters from "./Filters";
import { useFetch } from "@/hooks/useFetch";
import { CrudApi } from "@/API";
import { GenerateItemParams, IItem, IItemParams } from "@/types/IItem";
import st from "./st.module.scss";
import { CrateParamsFromFilter } from "../../utils/CreateParamsFromFiltes";
import ReportMessage from "@/pages/ReportUI/ReportMessage";
import DownloadLink from "@/pages/ReportUI/DownloadLink";
const Report = () => {
  const [filters, setFilters] = useState<IItemParams>(GenerateItemParams());
  const { fething, data, setData, error, isLoadingComplete } = useFetch(
    async () => {
      const response = await CrudApi.getAll<IItem>("/item", {
        ...CrateParamsFromFilter(filters),
        limit: 10000,
      });
      return response.data;
    }
  );

  const ref = useRef<HTMLParagraphElement>(null);
  const onReport = () => {
    if (ref.current && data.length > 0) ref.current.click();
  };

  const onGet = () => {
    fething();
    setData([]);
  };

  return (
    <ReportContainer onGet={onGet} onReport={onReport}>
      <Filters filters={filters} setFilters={setFilters} />
      <ReportMessage
        data={data}
        error={error}
        isLoadingComplete={isLoadingComplete}
        className={st.report__msg}
      />
      <DownloadLink
        document={<PDFDoc items={data} />}
        innerRef={ref}
        filename={"Отчёт по товарам.pdf"}
      />
    </ReportContainer>
  );
};

export default Report;
