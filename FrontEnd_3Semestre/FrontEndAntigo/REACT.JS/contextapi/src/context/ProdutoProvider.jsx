import { useState } from "react";
import { ProdutoContext } from "./ProdutoContext";

export const ProdutoProvider = ({ children }) => {
    const [listaProduto, setListaProduto] = useState([]);

    return (
        <ProdutoContext.Provider
            value={{
                listaProduto,
                setListaProduto
            }}
        >
            {children}
        </ProdutoContext.Provider>
    );
};

export default ProdutoProvider;