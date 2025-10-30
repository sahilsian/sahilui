import Card from "@/components/hives/card/card"
import useFetchCats from "@/hooks/useFetchCats"
import { useState } from "react"

const CatCard = () => {
    const {cats, loading} = useFetchCats()
    if (loading) {
        return <div>Loading</div>
    }
    const cat = cats[0];

    if (!cats || cats.length === 0) {
        return <div>No cats found</div>;
    }

    
    console.log(cat)
    return (
        <Card src={cat?.url} alt={"Random Cat"} width={cat?.width} height={cat?.height} ></Card>
    )
}

export default CatCard