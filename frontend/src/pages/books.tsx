import React from "react";
import { Provider } from "react-redux";
import { store } from "../state/store";
import BaseLayout from "../components/BaseLayout";
import BooksPage from "../components/bookspage";

const Page: React.FC = () => {
  return (
    <Provider store={store}>
      <BaseLayout>
        <BooksPage />
      </BaseLayout>
    </Provider>
  );
};

export default Page;
