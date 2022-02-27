import axios from "axios";
import { useEffect, useState } from "react";

import ContainerS from "../style";
import Item from "../../card/item";

export const listOrders = [];

const GroupMenu = () => {
  const [item, setItem] = useState([]);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("/menu", config)
      .then((res) => {
        setItem(res.data);
        setLogged(true);
      })
      .catch((erro) => console.error(erro));
  }, [logged]);

  const Handle = (e, i) => {
    if (e) {
      listOrders.push(i);
    } else {
      const noOrderIndex = listOrders.indexOf(i);
      listOrders.splice(noOrderIndex, 1);
    }
    console.log(listOrders);
  };

  const HandleSumbitItem = (e) => {
    console.log(e);
  };

  return (
    <ContainerS>
      {item.map((item) => (
        <Item
          onChange={(e) => {
            Handle(e.target.checked, item);
          }}
          data={item}
          key={item.id}
        />
      ))}

      <div
        className="modal fade modal-dialog-scrollable"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Cardápio
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <GroupMenu />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Salvar pedidos
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContainerS>
  );
};

export default GroupMenu;
