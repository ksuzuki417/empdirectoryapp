import React from "react";
import Directory from "./components/Directory";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import employees from "./components/directory.json";


function App() {
  return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Directory
          id={employees[0].id}
          firstName={employees[0].firstName}
          lastName={employees[0].lastName}
          title={employees[0].title}
          email={employees[0].email}
          github={employees[0].github}
        />
        <Directory
          id={employees[1].id}
          firstName={employees[1].firstName}
          lastName={employees[1].lastName}
          title={employees[1].title}
          email={employees[1].email}
          github={employees[1].github}
        />
        <Directory
          id={employees[2].id}
          firstName={employees[2].firstName}
          lastName={employees[2].lastName}
          title={employees[2].title}
          email={employees[2].email}
          github={employees[2].github}
        />





      </Wrapper>
  );
}

export default App;
