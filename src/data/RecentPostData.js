import Button from "@/components/Button";

const recentPostData = [
  {
    key: 0,
    picture: {
      profile: "bg-robert",
      postPic: "bg-imp-grid",
    },
    name: "Robert Fox",
    date: "5 August 2022",
    title: "Implicit Grids, Repeatable Layout Patterns, and Danglers",
    parag:
      "Dave Rupert with some modern CSS magic that tackles one of those classic conundrums: what happens when the CSS for component is unable to handle the content we throw at it?",
    button: (
      <Button
        name={`readMoreBttn`}
        className={`w-[143px] h-[40px] bg-white border-2 border-gray-800 rounded-lg flex justify-center items-center gap-[8px] group hover:bg-[#121420] transition`}
      >
        <>
          <h1 className="text-gray-800 text-[16px] font-bold group-hover:text-white">
            Read more
          </h1>
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" group-hover:stroke-white"
              d="M2.33333 1.5H9V8.16667M9 1.5L1 9.5L9 1.5Z"
              stroke="#33322E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      </Button>
    ),
    views: 5,
    comments: 5,
  },
  {
    key: 1,
    picture: {
      profile: "bg-floyd",
      postPic: "bg-auto-grid",
    },
    name: "Floyd Miles",
    date: "5 August 2022",
    title: "Exploring CSS Grid’s Implicit Grid and Auto-Placement Powers",
    parag:
      "When working with CSS Grid, the first thing to do is to set display: grid on the element that we want to be become a grid container. Then we explicitly define the grid using...",
    button: (
      <Button
        name={`readMoreBttn`}
        className={`w-[143px] h-[40px] bg-white border-2 border-gray-800 rounded-lg flex justify-center items-center gap-[8px] group hover:bg-[#121420] transition`}
      >
        <>
          <h1 className="text-gray-800 text-[16px] font-bold group-hover:text-white">
            Read more
          </h1>
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" group-hover:stroke-white"
              d="M2.33333 1.5H9V8.16667M9 1.5L1 9.5L9 1.5Z"
              stroke="#33322E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      </Button>
    ),
    views: 5,
    comments: 5,
  },
  {
    key: 2,
    picture: {
      profile: "bg-nico",
      postPic: "bg-mdn",
    },
    name: "Nico",
    date: "5 August 2022",
    title: "Recreating MDN’s Truncated Text Effect",
    parag:
      "It’s no secret that MDN rolled out a new design back in March. It’s gorgeous! And there are some sweet CSS-y gems in it that are fun to look at. One of those gems is how card...",
    button: (
      <Button
        name={`readMoreBttn`}
        className={`w-[143px] h-[40px] bg-white border-2 border-gray-800 rounded-lg flex justify-center items-center gap-[8px] group hover:bg-[#121420] transition`}
      >
        <>
          <h1 className="text-gray-800 text-[16px] font-bold group-hover:text-white">
            Read more
          </h1>
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" group-hover:stroke-white"
              d="M2.33333 1.5H9V8.16667M9 1.5L1 9.5L9 1.5Z"
              stroke="#33322E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      </Button>
    ),
    views: 5,
    comments: 5,
  },
  {
    key: 3,
    picture: {
      profile: "bg-nico",
      postPic: "bg-logs",
    },
    name: "Nico",
    date: "5 August 2022",
    title: "Roundup of Recent Document Outline Chatter",
    parag:
      "It’s not everyday that HTML headings are the topic de jour, but my folder of saved links is accumulating articles about the recently merged removal of the document outline algorithm...",
    button: (
      <Button
        name={`readMoreBttn`}
        className={`w-[143px] h-[40px] bg-white border-2 border-gray-800 rounded-lg flex justify-center items-center gap-[8px] group hover:bg-[#121420] transition`}
      >
        <>
          <h1 className="text-gray-800 text-[16px] font-bold group-hover:text-white">
            Read more
          </h1>
          <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" group-hover:stroke-white"
              d="M2.33333 1.5H9V8.16667M9 1.5L1 9.5L9 1.5Z"
              stroke="#33322E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </>
      </Button>
    ),
    views: 5,
    comments: 5,
  },
];

export default recentPostData;
