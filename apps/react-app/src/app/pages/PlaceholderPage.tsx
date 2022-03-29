import { HistoryKey, setHistories, useAppDispatch, usePlaceholderHook } from "@react-workspace/placeholder-lib";
import { ReactNode, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import PlaceholderView from "../components/PlaceholderView";
import LocalStorageUtil from "../utils/localStorage";

const PlaceholderPage = () => {
    const {
        state: { data, loading },
      } = usePlaceholderHook();
      const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch(setHistories(LocalStorageUtil.GetArrayValue(HistoryKey)));
      }, [dispatch]);

      let widget: ReactNode = <span>Loading</span>;
      if (!loading) widget = (
        data.map(i => (
          <PlaceholderView key={i.id} data={i} />
        )) 
      );
    return <PageHeader
          title="Home Page"
    >
      {widget}
    </PageHeader>
};

export default PlaceholderPage;
