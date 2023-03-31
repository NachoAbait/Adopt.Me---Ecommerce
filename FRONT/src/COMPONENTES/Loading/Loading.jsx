import css from "./Loading.module.css"
 
export default function Loading() {
  return (
      <div classNa={css.loadingpage}>
          <div class={ css.loader}></div>
     <p>"Loading..."</p>
     </div>
  )
}