import { usePlaceholderHook } from "@react-workspace/placeholder-lib";
import { ReactNode } from "react";
import PageHeader from "../components/PageHeader";
import PlaceholderView from "../components/PlaceholderView";

const PlaceholderPage = () => {
    const {
        state: { data, loading },
      } = usePlaceholderHook();

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
