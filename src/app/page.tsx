import styles from "./page.module.css";
import { Autocomplete } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <Autocomplete />
    </main>
  );
}
