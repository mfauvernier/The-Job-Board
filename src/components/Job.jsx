const Job = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="infos">
        <p>{props.contractType} </p>-<p>{props.country} </p>-<p>{props.city}</p>
      </div>
    </>
  );
};

export default Job;
