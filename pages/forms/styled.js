import Link from "next/link";

export default function Index() {
  return (
    <>
      <main>
        <header role="banner">
          <h1>Step 4: Style Form</h1>
        </header>
        <p>
          Now that the form is structured and semantically grouped, let's add
          some styling.
        </p>
        <form action="." method="post">
          <fieldset className="branding">
            <legend className="sectionLegend">Branding Profile</legend>
            <label for="company">Name of Company:</label>
            <input type="text" name="company" id="company" />
            <label for="slogan">Company tag line or slogan:</label>
            <input
              type="text"
              name="slogan"
              id="slogan"
              placeholder="If your company doesn't have a slogan, type 'none'"
            />
            <label for="business_type">
              What is the nature of your business?:
            </label>
            <input type="text" id="business_type" name="business_type" />
            <label for="identity-accomplish">
              What are you hoping to accomplish with your new identity?
            </label>
            <textarea
              id="identity-accomplish"
              name="identity-accomplish"
            ></textarea>
            <label for="goals">What are your long term goals?</label>
            <textarea id="goals" name="goals"></textarea>
            <label for="attributes">
              What attributes would you like your new identity to reflect about
              your business?
            </label>
            <input type="text" name="attributes" id="attributes" />
            <label for="phrase">
              State a single-minded word or phrase that will appropriately
              describe your company:
            </label>
            <input type="text" name="phrase" id="phrase" />
            <label for="adjectives">
              What adjectives would best describe your visual identity?
            </label>
            <input type="text" name="adjectives" id="adjectives" />
            <label for="visuals">
              What type of visuals do you find appealing?
            </label>
            <input type="text" id="visuals" name="visuals" />
            <label for="services">
              How would you describe your products and/or services:
            </label>
            <textarea id="services" name="services"></textarea>
            <label for="audience-current">
              Please describe your existing audience
            </label>
            <textarea
              id="audience-current"
              name="audience-current"
              placeholder="e.g. demographics like age, gender, income level, etc."
            ></textarea>
            <label for="audience-new">
              Who are you hoping to add to your audience?
            </label>
            <textarea
              id="audience-new"
              name="audience-new"
              placeholder="please be as specific as possible"
            ></textarea>
            <label for="message">
              What is the overall message you are trying to convey to your
              target audience?
            </label>
            <input type="text" name="message" id="message" />
            <label for="competitor-identity">
              Who are your competitors and what do you think about their visual
              identities?
            </label>
            <textarea
              id="competitor-identity"
              name="competitor-identity"
              placeholder="e.g. logo, packaging, website, etc."
            ></textarea>
            <label for="competitor-apart">
              What sets you apart from your competition?
            </label>
            <textarea id="competitor-apart" name="competitor-apart"></textarea>
            <label for="usage">Where will you use your new identity?</label>
            <input
              type="text"
              name="usage"
              id="usage"
              placeholder="e.g. website, business cards, letterheads, etc"
            />
          </fieldset>
          <fieldset className="website">
            <legend className="sectionLegend">Website Details</legend>
            <div
              className="radio-group"
              role="group"
              aria-labelledby="existing-website"
            >
              <p id="existing-website" className="radio-legend">
                Do you have an existing website?
              </p>
              <label className="radio">
                <input
                  type="radio"
                  name="has_site"
                  value="yes"
                  className="parent"
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="has_site"
                  value="no"
                  className="parent"
                />
                No
              </label>
            </div>
            <label for="url">What is the URL (web address)?</label>
            <input type="text" id="url" name="url" className="child" />
            <label for="hosting">
              Please provide us with your web hosting company
            </label>
            <input
              type="text"
              id="hosting"
              name="hosting"
              className="child"
              placeholder="If you don't know this information, leave this field blank"
            />

            <fieldset className="radio-group">
              <legend className="radio-legend">
                Are you planning to keep the website or start anew?
              </legend>
              <label className="radio">
                <input
                  type="radio"
                  name="keep_site"
                  value="keep"
                  className="parent"
                />
                Keep existing site design
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="keep_site"
                  value="new"
                  className="parent"
                />
                Create a new site design
              </label>
            </fieldset>
            <label for="modifications">
              What modifications do you want to make?
            </label>
            <textarea
              id="modifications"
              name="modifications"
              className="child"
            ></textarea>
            <label for="look">
              What type of look are you trying to achieve?
            </label>
            <input type="text" id="look" name="look" />

            <label for="features">
              What specific features do you think will make your website a
              success?
            </label>
            <input type="text" id="features" name="features" />

            <label for="design_style">
              Please list at least 3 URLs of high quality sites that you like
              the look of:
            </label>
            <span className="hint">
              These do not have to be sites whose business is similar to yours.
              It aids us in determining what your design style is. Please
              consider layout, colors, navigation, graphics, and typography
            </span>
            <textarea
              id="design_style"
              name="design_style"
              placeholder="example.com, example.com..."
            ></textarea>
            <label for="navigation">
              List the major pages (navigation) that you would like to have in
              your site:
            </label>
            <textarea
              id="navigation"
              name="navigation"
              placeholder="Home, About Us, Contact, etc."
            ></textarea>

            <label for="competitors">
              Please provide the urls of competitors' sites, if possible:
            </label>
            <textarea
              id="competitors"
              name="competitors"
              placeholder="example.com, example.com..."
            ></textarea>
            <fieldset className="radio-group">
              <legend className="radio-legend">
                Do you have any written content for your site?
              </legend>
              <label className="radio">
                <input
                  type="radio"
                  name="copy"
                  value="yes"
                  className="parent"
                />
                Yes
              </label>
              <label className="radio">
                <input type="radio" name="copy" value="no" className="parent" />
                No
              </label>
            </fieldset>
            <fieldset className="radio-group">
              <legend className="radio-legend">
                If not, will you need help writing content for your website?
              </legend>
              <label className="radio">
                <input
                  type="radio"
                  name="copy_help"
                  value="yes"
                  className="child"
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="copy_help"
                  value="no"
                  className="child"
                />
                No
              </label>
            </fieldset>
          </fieldset>
          <fieldset className="marketing">
            <legend className="sectionLegend">Marketing Details</legend>
            <label for="clientele">How do you normally obtain clients?</label>
            <input
              type="text"
              name="clientele"
              id="clientele"
              placeholder="e.g. word of mouth, newspaper ads, yellowpages, etc"
            />
            <label for="traffic">
              How do you plan to drive traffic to your website?
            </label>
            <textarea
              id="traffic"
              name="traffic"
              placeholder="If you need help finding ways to drive traffic to your site, please state so as well."
            ></textarea>
            <fieldset className="radio-group">
              <legend className="radio-legend">
                Do you have an Email campaign?
              </legend>
              <label className="radio">
                <input
                  type="radio"
                  name="email_campaign"
                  value="yes"
                  className="parent"
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="email_campaign"
                  value="no"
                  className="parent"
                />
                No
              </label>
            </fieldset>
            <fieldset className="radio-group">
              <legend className="radio-legend">
                Does your email campaign carry your corporate brand?
              </legend>
              <label className="radio">
                <input
                  type="radio"
                  name="email_branding"
                  value="yes"
                  className="parent child"
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="email_branding"
                  value="no"
                  className="parent child"
                />
                No
              </label>
            </fieldset>
            <fieldset className="radio-group">
              <legend className="radio-legend">
                Will you need help adding your corporate brand to your emails?
              </legend>
              <label className="radio">
                <input
                  type="radio"
                  name="email_branding_help"
                  value="yes"
                  className="child"
                />
                Yes
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="email_branding_help"
                  value="no"
                  className="child"
                />
                No
              </label>
            </fieldset>
          </fieldset>
          <fieldset className="other">
            <legend className="sectionLegend">Other Details</legend>
            <label for="launch">
              By what date would you like to launch your site?
            </label>
            <input
              type="text"
              id="launch"
              name="launch"
              value=""
              placeholder="MM/DD/YYYY"
            />
            <fieldset className="radio-group">
              <legend className="radio-legend">
                What is the budget for this project?
              </legend>
              <label className="radio">
                <input
                  type="radio"
                  name="budget"
                  value="less than 1000"
                  aria-label="less than $1,000"
                />
                Less than 1,000
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="budget"
                  value="1,000 - 2,500"
                  aria-label="Between $1,000 and $2,500"
                />
                1,000 - 2,500
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="budget"
                  value="2,500 - 5,000"
                  aria-label="Between $2,500 and $5,000"
                />
                2,500 - 5,000
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="budget"
                  value="5,000 - 7,500"
                  aria-label="Between $5,000 and $7,500"
                />
                5,000 - 7,500
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="budget"
                  value="7,500 - 10,000"
                  aria-label="Between $7,500 and $10,000"
                />
                7,500 - 10,000
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="budget"
                  value="10000+"
                  aria-label="$10,000 or more"
                />
                10,000 or more
              </label>
            </fieldset>
            <label for="other">
              Are there any other comments/specific ideas we should keep in mind
              while designing your project?
            </label>
            <textarea id="other" name="other"></textarea>

            <input
              type="submit"
              name="submit"
              id="submit"
              value="Send Questionnaire"
            />
          </fieldset>
        </form>
        <Link href="/forms/validated"><a>Next Section</a></Link>
      </main>
      <style jsx>{`
        * {
          font-family: sans-serif;
        }
        label,
        input[type="text"],
        input[type="email"],
        textarea {
          display: block;
        }
        label {
          margin-bottom: 3px;
          max-width: 280px;
        }
        input,
        textarea {
          margin-bottom: 18px;
        }
        input,
        textarea {
          min-width: 280px;
        }
        input[type="text"],
        input[type="email"] {
          min-height: 40px;
          padding: 6px;
          border: 1px solid;
        }
        input[type="radio"],
        input[type="checkbox"] {
          margin-right: 9px;
        }
        textarea {
          min-height: 100px;
          padding: 6px;
        }
        input[type="text"],
        input[type="email"],
        textarea,
        fieldset {
          border-radius: 3px;
          border-color: #aaa;
        }
        form {
          width: 90%;
          margin: 0 auto;
        }
        .branding,
        .website,
        .marketing,
        .other {
          margin-bottom: 36px;
        }
        .sectionLegend {
          font-size: 2em;
          margin-bottom: 9px;
        }
        .radio-group {
          border: none;
          padding-left: 0;
        }
        .hint {
          display: none;
        }
        ::placeholder {
          font-size: 1em;
          color: #767676;
        }
        input[type="submit"] {
          background-color: purple;
          color: white;
          font-size: 1rem;
          padding: 9px;
          border: 1px solid purple;
          border-radius: 3px;
          transition: 0.1s all linear;
        }
        input[type="submit"]:hover,
        input[type="submit"]:focus {
          background-color: white;
          color: purple;
          text-decoration: underline;
          outline-color: purple;
        }
        @media screen and (min-width: 768px) {
          form {
            width: 50%;
          }
        }
      `}</style>
    </>
  );
}
