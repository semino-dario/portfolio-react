import Project from "../Project";
import "../../App.css";

export default function LaLibre() {
  const imagenes = [
    { label: "dashboard", imgPath: "/images/dashboard-la-libre.png" },
    { label: "login", imgPath: "/images/login-la-libre.png" },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <br />
        <div className="container max-w-[100%]">
          <div className=" grid grid-cols-1 gap-[10px] max-w-[95%] p-6 md:grid-cols-2 lg:grid-cols-3 justify-around ">
            <div>
              <div
                className={"bg-[#000] h-[200px] w-[200px] rounded-[50%] p-4"}
              >
                <img
                  className="object-cover"
                  src={"/images/main-logo-lalibre.png"}
                  alt="logo of La Libre publising house"
                />
              </div>
              <img
                src="/images/libreria.png"
                alt="image of a woman with books"
              />
            </div>
            <div className="mt-[2rem] md:mt-0">
              <p className="text-center text-titulo font-bold"> - HOME - </p>
              <br />
              <Project
                image={"/images/home-la-libre.png"}
                techInfo={
                  "Builded with Next.js, SASS, Redux, and TypeScript. The design was made in colaboration with the designer Adriana Mendoza, and created with Figma."
                }
                generalInfo={
                  "Website of La Libre publishing house, with information about the books and the authors of the house. It also has a section for articles about books, interviews and other contents."
                }
                site={"https://la-libre-v1.vercel.app/"}
                repo={""}
              />
            </div>
            <div className="mt-[2rem] lg:mt-0">
              <p className="text-center text-titulo font-bold">
                {" "}
                - LOGIN AND DASHBOARD -{" "}
              </p>
              <br />
              <Project
                imagenes={imagenes}
                techInfo={
                  "Builded as a monolith with Next.js and Typescript, the API is intergrated in the same project. The authentication is done with NextAuth and the database is MongoDB. It uses Cloudinary to upload the images, Google Analytics to track the users and Mail Relay to send the emails notifications."
                }
                generalInfo={
                  "This dashboard allows the user to manage the content of the website. It allows to create, edit and delete the books, authors, articles, events and courses. The events compoment is updated automatically acording to the date of each event. The dashboard also allows to manage the e-mail notifications for subscribers and offers a tracking of the users that visit the website."
                }
                docs={false}
                repo={""}
                site={""}
              />
            </div>
            <br />
          </div>
          <br />
        </div>
        <br /> <br />
      </div>
    </div>
  );
}
