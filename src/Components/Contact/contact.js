import Navbar from "../navbar"


const Contact = () => 
<div className="flex">
    <Navbar/>
    <div className="w-4/5">
    <div className="w-2/3 pl-16">
    <h1 className="text-5xl text-slate-800 pt-20 font-serif">Contact Us!</h1>
  <form className="pt-16 flex flex-col">
    <label htmlFor="fname" className="text-sm text-slate-800 font-serif pb-0.5">First Name</label>
    <input type="text" className="rounded text-sm font-sans border border-slate-300 p-2 mb-4" id="fname" name="firstname" placeholder="Your name.."/>

    <label htmlFor="lname" className="text-sm text-slate-800 font-serif  pb-0.5">Last Name</label>
    <input type="text" className="rounded text-sm font-sans border border-slate-300 p-2 mb-4" id="lname" name="lastname" placeholder="Your last name.."/>

    

    <label htmlFor="subject" className="text-sm text-slate-800 font-serif  pb-0.5">Message</label>
    <textarea id="subject" className="rounded text-sm font-sans border border-slate-300 p-2 mb-4" name="subject" rows="5" cols="" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <input type="submit" className="font-serif text-sm rounded bg-slate-950 w-24 h-10 text-white" value="Submit"/>
  </form>
    </div>
    </div>
</div>
export default Contact