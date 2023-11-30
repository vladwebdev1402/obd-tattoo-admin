import React, { useEffect, useState, FC } from "react";
import st from "./IdNamePage.module.scss";
import { observer } from "mobx-react-lite";
import SearchStore from "@/store/SearchStore/SearchStore";
import Input from "@/UI/input/Input";
import DataContainer from "@/UI/DataContainer/DataContainer";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import TableRow from "@/components/TableRow/TableRow";
import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import { useLocation } from "react-router-dom";
interface Props {
  link: string;
}
const IdNamePage: FC<Props> = observer(({ link }) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const [filterName, setFilterName] = useState("");
  const location = useLocation().pathname.split("/").at(-1) ?? "";

  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };

  const onCreate = () => {
    if (name != "") {
      IdNameStore.create(link, name);
      setName("");
    }
  };

  const onDelete = (_id: string) => {
    IdNameStore.delete(link, _id);
  };

  useEffect(() => {
    IdNameStore.getAll(link);
  }, [link]);

  useEffect(() => {
    const c = IdNameStore.data.filter((c) => c._id === current)[0] ?? {
      name: "",
    };
    setFilterName(c.name);
  }, [current]);
  return (
    <section className={`${st.city} container`}>
      <CreateContainer onCreate={onCreate}>
        <form onSubmit={submitEvent}>
          <Input
            title="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </form>
      </CreateContainer>

      <HeadDataContainer
        placeholder="Поиск"
        value={SearchStore.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          SearchStore.setValue(e.target.value);
        }}
      />

      <DataContainer
        className={st.city__body}
        error={IdNameStore.error}
        isLoadingComplete={IdNameStore.isLoadingComplete}
      >
        <TableRow fr={2} isTitle>
          <div>_id</div>
          <div>name</div>
        </TableRow>

        {IdNameStore.data
          .filter((data) =>
            data.name.toLowerCase().includes(SearchStore.value.toLowerCase())
          )
          .map((data) => (
            <TableRow
              fr={2}
              key={data._id}
              onDelete={() => onDelete(data._id)}
              onOpen={() => {
                setCurrent(data._id);
                setOpen(true);
              }}
            >
              <div>{data._id}</div>
              <div>{data.name}</div>
            </TableRow>
          ))}
      </DataContainer>
      {open && (
        <Modal
          setOpen={setOpen}
          onEdit={() => {
            IdNameStore.edit(link, { name: filterName, _id: current });
          }}
        >
          <Input
            title="name"
            value={filterName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilterName(e.target.value)
            }
          />
        </Modal>
      )}
    </section>
  );
});

export default IdNamePage;
