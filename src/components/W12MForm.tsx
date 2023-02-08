import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./species_name";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={(e: any) => setSpeciesName(e.target.value)}
      />
    </section>
  );
};

export default W12MForm;
