import Link from "next/link";

export default function Index() {
  return (
    <>
      <main>
        <header role="banner">
          <h1>Step 2: Structure the form</h1>
        </header>
        <p>
          This form is both unstructured and too long. Let's structure it and
          ensure it's digestable.
        </p>
        <form action="." method="post">
          <section className="branding">
            <h2>Branding Profile</h2>
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
          </section>
          <section className="website">
            <h2>Website Details</h2>
            <span class="radio-button">
              Do you have an existing website?
              <label class="radio">
                <input
                  type="radio"
                  name="has_site"
                  value="yes"
                  class="parent"
                />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="has_site" value="no" class="parent" />
                No
              </label>
            </span>
            <label for="url">What is the URL (web address)?</label>
            <input type="text" id="url" name="url" class="child" />
            <label for="hosting">
              Please provide us with your web hosting company
            </label>
            <input
              type="text"
              id="hosting"
              name="hosting"
              class="child"
              placeholder="If you don't know this information, leave this field blank"
            />

            <span class="radio-button">
              Are you planning to keep the website or start anew?
              <label class="radio">
                <input
                  type="radio"
                  name="keep_site"
                  value="keep"
                  class="parent"
                />
                Keep existing site design
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="keep_site"
                  value="new"
                  class="parent"
                />
                Create a new site design
              </label>
            </span>
            <label for="modifications">
              What modifications do you want to make?
            </label>
            <textarea
              id="modifications"
              name="modifications"
              class="child"
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
            <span class="hint">
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
            <span class="radio-button">
              Do you have any written content for your site?
              <label class="radio">
                <input type="radio" name="copy" value="yes" class="parent" />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="copy" value="no" class="parent" />
                No
              </label>
            </span>
            <span class="radio-button">
              If not, will you need help writing content for your website?
              <label class="radio">
                <input
                  type="radio"
                  name="copy_help"
                  value="yes"
                  class="child"
                />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="copy_help" value="no" class="child" />
                No
              </label>
            </span>
          </section>
          <section className="marketing">
            <h2>Marketing Details</h2>
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
            <span class="radio-button">
              Do you have an Email campaign?
              <label class="radio">
                <input
                  type="radio"
                  name="email_campaign"
                  value="yes"
                  class="parent"
                />
                Yes
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="email_campaign"
                  value="no"
                  class="parent"
                />
                No
              </label>
            </span>
            <span class="radio-button">
              Does your email campaign carry your corporate brand?
              <label class="radio">
                <input
                  type="radio"
                  name="email_branding"
                  value="yes"
                  class="parent child"
                />
                Yes
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="email_branding"
                  value="no"
                  class="parent child"
                />
                No
              </label>
            </span>
            <span class="radio-button">
              Will you need help adding your corporate brand to your emails?
              <label class="radio">
                <input
                  type="radio"
                  name="email_branding_help"
                  value="yes"
                  class="child"
                />
                Yes
              </label>
              <label class="radio">
                <input
                  type="radio"
                  name="email_branding_help"
                  value="no"
                  class="child"
                />
                No
              </label>
            </span>
          </section>
          <section className="other">
            <h2>Other Details</h2>
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
            <span class="radio-button">
              What is the budget for this project?
              <label class="radio">
                <input type="radio" name="budget" value="less than 1000" />
                Less than 1,000
              </label>
              <label class="radio">
                <input type="radio" name="budget" value="1,000 - 2,500" />
                1,000 - 2,500
              </label>
              <label class="radio">
                <input type="radio" name="budget" value="2,500 - 5,000" />
                2,500 - 5,000
              </label>
              <label class="radio">
                <input type="radio" name="budget" value="5,000 - 7,500" />
                5,000 - 7,500
              </label>
              <label class="radio">
                <input type="radio" name="budget" value="7,500 - 10,000" />
                7,500 - 10,000
              </label>
              <label class="radio">
                <input type="radio" name="budget" value="10000+" />
                10,000 or more
              </label>
            </span>
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
          </section>
        </form>
        <Link href="/forms/semantic"><a>Next Section</a></Link>
      </main>
      <style jsx>{`
        label,
        input,
        textarea {
          display: block;
        }
        label {
          margin-bottom: 3px;
        }
        input {
          margin-bottom: 9px;
        }
        form {
          width: 90%;
          margin: 0 auto;
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
