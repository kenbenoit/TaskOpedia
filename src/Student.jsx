const Student = (props) => {
  // Props contain the studentName and experience passed from the parent component.

  return (
    <div className="container p-4 bg-success my-3 rounded">
      <div className="row border p-2">
        <div className="col-1">
          <img
            src={`https://ui-avatars.com/api/?name=${props.studentName}`}
            style={{ maxWidth: "50px" }}
          />
        </div>
        <div className="col-8">
          Name: {props.studentName}
          <br />
          Experience: {props.experience} years
        </div>
        <div className="col-2">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Student;
