import React, { useEffect, useState, useRef } from "react";
function App() {
  const RESTARAUNT_LIST =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0940877&lng=80.24746569999999&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING";
  const [restarauntList, setRestarauntList] = useState();
  const initialRestarauntList = useRef();
  const getRestarauntDetails = async () => {
    try {
      const restarauntArray = [];
      const response = await fetch(RESTARAUNT_LIST);
      const { data } = await response.json();
      data?.cards.forEach((card) => {
        const restarauntData = card?.data;
        restarauntArray.push({
          id: restarauntData.data.id,
          name: restarauntData.data.name,
        });
      });
      initialRestarauntList.current = restarauntArray;
      setRestarauntList(restarauntArray);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const filterRestaraunt = (e) => {
    let filteredResData = [];
    if (initialRestarauntList.current) {
      initialRestarauntList.current.forEach((restaraunt) => {
        if (
          restaraunt.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
          filteredResData.push(restaraunt);
      });
      filteredResData && setRestarauntList(filteredResData);
    }
  };
  useEffect(() => {
    getRestarauntDetails();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <input
          type="text"
          placeholder="Search for restaraunts"
          onChange={filterRestaraunt}
        />
        {restarauntList && restarauntList.length > 0
          ? restarauntList.map((items) => {
              return <p>{items.name}</p>;
            })
          : "No restaraunts found"}
      </div>
    </>
  );
}

export default App;
