import {CopyText} from "@/components/CopyText/CopyText";
import TelegramSvg from "@/public/icons/telegram.svg";
import TwitterSvg from "@/public/icons/twitter.svg";
import css from "./Footer.module.scss";

const socials = [
  {
    href: "/",
    icon: <TelegramSvg/>,
  },
  {
    href: "/",
    icon: <TwitterSvg/>,
  },
];

/**
 * Footer component for the website. Displays logo, newsletter form, social media links, and legal information.
 */
export default function Footer() {
  return <footer className={`section ${css.footer}`}>
    <div className="sectionInner">
      <h2>Get Involved</h2>
      <div className={`${css.row} ${css.contractAddress}`}>
        <div>ID</div>
        <CopyText text="0dc8fb6d-b849-479d-8e64-56ea87aaa9ca" className={css.contractAddressText}/>
      </div>

      <div className={`${css.row} ${css.socials}`}>
        {socials.map((social) => <a key={social.href} href={social.href} className={`custom ${css.social}`} target="_blank">
          {social.icon}
        </a>)}
      </div>

      <div className={css.separator}></div>
      <div className={css.bottom}>
        <div>Copyright © 2025, SymbyAI</div>
        <div>This website is a demo created solely for interview purposes. All content is fictional and should not be interpreted as representing actual AI systems, technologies, or capabilities.</div>
      </div>
    </div>
  </footer>;
}
