import { CrudApi } from "@/API";
import ReportContainer from "@/components/ReportContainer/ReportContainer";
import { useFetch } from "@/hooks/useFetch";
import DownloadLink from "@/UI/ReportUI/DownloadLink";
import ReportMessage from "@/UI/ReportUI/ReportMessage";
import { IOrder, IOrderParams } from "@/types/IOrder";
import { useState, useRef } from "react";
import PdfDocument from "./PdfDocument";
import Filter from "./Filter";
import { useEffect } from "react";
const Report = () => {
  const { fething, data, setData, error, isLoadingComplete } = useFetch(
    async () => {
      const response = await CrudApi.getAll<IOrder>("order/all", filters);
      return response.data;
    }
  );

  const ref = useRef<HTMLParagraphElement>(null);
  const [filters, setFilters] = useState<IOrderParams>({
    start: "",
    end: "",
  });

  const onReport = () => {
    if (ref.current && data.length > 0) ref.current.click();
  };
  const onGet = () => {
    if (filters.start && filters.start) fething();
  };

  useEffect(() => {
    return () => setData([]);
  }, []);

  return (
    <ReportContainer onGet={onGet} onReport={onReport}>
      <Filter filters={filters} setFilters={setFilters} />
      <ReportMessage
        data={data}
        error={error}
        isLoadingComplete={isLoadingComplete}
      />
      <DownloadLink
        innerRef={ref}
        document={<PdfDocument orders={data} />}
        filename={`Отчёт по заказам за период с ${filters.start} по ${filters.start}`}
      />
    </ReportContainer>
  );
};

export default Report;
