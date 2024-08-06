import MusaAvator from "./musa.jpg";

const Sidebar = () => (
  <>
    <div className="bg-blue-900 rounded-lg">
      <div className="p-5">
        <div className="profile-content">
          <div className="avator">
            <div className="avator-globe"></div>
            <div className="avator-globe-45"></div>
            <img src={MusaAvator} className="logo react" alt="React logo" />
          </div>
        </div>

        <div className="mt-4">
          <div className="text-center text-sm font-bold opacity-85">
            MUSA A. MTUYA
          </div>
          <div className="text-center text-xs opacity-50">
            <i>the</i> Programmer
          </div>
        </div>
      </div>

      <div>
        <div className="font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5">
          Introduction
        </div>
        <div className="font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5">
          Expertise
        </div>
        <div className="font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5">
          Project/Portfolio
        </div>
        <div className="font-semibold bg-blue-400 text-blue-950 cursor-pointer pt-2 pb-2 pl-5 pr-5">
          Contacts
        </div>
      </div>
    </div>
  </>
);
export default Sidebar;
