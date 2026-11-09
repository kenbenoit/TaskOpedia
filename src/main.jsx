import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Student from "./Student";
import StudentReview from "./StudentReview";


const root = createRoot(document.getElementById("root"));

function HomePage() {
  return (
    <div>
      <Header />
      <p>Welcome to Taskopedia!</p>
      <Student studentName="Ken Benoit" experience={2}>
        <StudentReview review="Great student!" />
      </Student>
      <Student studentName="Jane Doe" experience={3}>
        <StudentReview review="Very diligent." />
      </Student>
      <Student studentName="John Smith" experience={4}>
        <StudentReview review="Excellent performance." />
      </Student>
      <Footer />
    </div>
  );
}


root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
