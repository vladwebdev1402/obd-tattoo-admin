import React, { useEffect, useState } from "react";
import st from "./CityPage.module.scss";
import { observer } from "mobx-react-lite";
import CityStore from "@/store/CityStore/CityStore";
import SearchStore from "@/store/SearchStore/SearchStore";
import Input from "@/UI/input/Input";
import DataContainer from "@/UI/DataContainer/DataContainer";
import CreateContainer from "@/components/CreateContainer/CreateContainer";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import TableRow from "@/components/TableRow/TableRow";
import Modal from "@/UI/modal/Modal";
const CityPage = observer(() => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  const [filterName, setFilterName] = useState("");

  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };

  const onCreate = () => {
    if (name != "") {
      CityStore.createCity(name);
      setName("");
    }
  };

  const onDelete = (_id: string) => {
    CityStore.deleteCity(_id);
  };

  useEffect(() => {
    CityStore.getAll();
  }, []);

  useEffect(() => {
    const c = CityStore.city.filter((c) => c._id === current)[0] ?? {
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
        error={CityStore.error}
        isLoadingComplete={CityStore.isLoadingComplete}
      >
        <TableRow fr={2} isTitle>
          <div>_id</div>
          <div>name</div>
        </TableRow>

        {CityStore.city
          .filter((city) =>
            city.name.toLowerCase().includes(SearchStore.value.toLowerCase())
          )
          .map((city) => (
            <TableRow
              fr={2}
              key={city._id}
              onDelete={() => onDelete(city._id)}
              onOpen={() => {
                setCurrent(city._id);
                setOpen(true);
              }}
            >
              <div>{city._id}</div>
              <div>{city.name}</div>
            </TableRow>
          ))}
      </DataContainer>
      {open && (
        <Modal
          setOpen={setOpen}
          onEdit={() => {
            CityStore.editCity({ name: filterName, _id: current });
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

export default CityPage;
