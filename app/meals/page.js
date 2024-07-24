import Link from "next/link"
import classes from './page.module.css'
import MealsGrid from "@/components/meals/meals-grid"
import {getMeals} from "@/lib/meals"
import { Suspense } from "react"

async function Meals(){
    const meals = await getMeals()
    return <MealsGrid meals={meals}/>
}
export default function MealsPage(){
    
    return(
        <>
        <header className={classes.header}>
            <h1>
                Delicious Meals,Created{' '}
                <span className={classes.highlight}>by You</span>
            </h1>
            <p>Choose you favorite recipie</p>
            <p className={classes.cta}>
                <Link href="/meals/share"className="">share your fav recipie</Link>
            </p>
        </header>
        <main className={classes.main}>
        <Suspense fallback={<h1 className={classes.loading}>Fetching the data ...</h1>}>
        <Meals/>
        </Suspense>
        </main>
        </>
        )
    }