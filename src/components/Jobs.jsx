import Job from "./Job";

const Jobs = () => {
  return (
    <>
      <div className="container">
        <div className="item red">
          <Job
            className="job"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australia"
            city="Sydney"
          />
        </div>
        <div className="item green">
          <Job
            className="job"
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
        <div className="item yellow">
          <Job
            className="job"
            title="Responsable d'atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Pantin"
          />
        </div>
        <div className="item blue">
          <Job
            className="job"
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
        </div>
        <div className="item orange">
          <Job
            className="job"
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
        </div>
        <div className="item red">
          <Job
            className="job"
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          />
        </div>
        <div className="item green">
          <Job
            className="job"
            title="Vendeur/se Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans Montana"
          />
        </div>
        <div className="item yellow">
          <Job
            className="job"
            title="CRM & Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New York"
          />
        </div>
        <div className="item blue">
          <Job
            className="job"
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Paris"
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
