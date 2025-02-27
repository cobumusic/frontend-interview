import Button from "@/components/Button/Button";
import css from "./not-found.module.scss";

export default function NotFound() {
  return <section className={`section ${css.notFound}`}>
    <div className={css.background}>
    </div>
    <div className="sectionInner">
      <h1>
        {/*we're faking our letter-spacing with spans and flex gap because the letter-spacing rule adds space after the last letter too*/}
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <div className={css.subheadline}>This block is empty. Try scanning for a different address.</div>
      <Button href="/">Return Home</Button>
    </div>
  </section>;
}
