function ContactUs() {
  return (
    <main>
      <section className="bg-[#3AA6B9] py-16 sm:py-24 mb-8 sm:mb-16">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-2">
            <div>
              <div className="mx-auto max-w-md">
                <h1 className="text-5xl">Contact Us</h1>
                <p>Let us connect for a better future and growth</p>
                <div>
                  <div>
                    <div></div>
                    <div>Address</div>
                  </div>
                  <p>
                    Office No 203, 2nd Floor, Gandharva Capital, above Hotel
                    Kolhapuri, near Sahyadri Hospital, Bhosale Nagar, Hadapsar,
                    Pune, Maharashtra 411028
                  </p>
                </div>
                <div>
                  <div>
                    <div></div>
                    <div>Phone</div>
                  </div>
                  <p>+91-986 065 8321</p>
                </div>
                <div>
                  <div>
                    <div></div>
                    <div>Email</div>
                  </div>
                  <p>+91-986 065 8321</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-white mb-2">Send Us a Message</p>
              <form>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="max-w-sm px-3 py-2 outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="123-456-78"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}"
                    className="max-w-sm px-3 py-2 outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="max-w-sm px-3 py-2 outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 mb-4">
                  <label htmlFor="msg">Message</label>
                  <textarea
                    id="msg"
                    name="msg"
                    type="text-area"
                    className="max-w-sm px-3 py-2 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="button"
                    value={"Submit"}
                    className="px-8 py-2 rounded-lg bg-white text-[#3AA6B9]"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
