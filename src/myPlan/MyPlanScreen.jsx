import MyList from "../components/MyList";

function MyPlanScreen() {
  const ongoingPlans = [
    { categoryImg: "/assets/mandarat-icon.svg", planTitle: "2025년 계획" },
    { categoryImg: "/assets/bingo-icon.svg", planTitle: "적금 빙고" },
  ];

  const completedPlans = [
    { categoryImg: "/assets/bingo-icon.svg", planTitle: "독서 리스트" },
  ];

  return (
    <div className="main-wrap">
      <div className="myplan-list ongoing">
        <p className="myplan-list-title">나의 목표 리스트</p>
        {ongoingPlans.map((plan, index) => (
          <MyList
            key={index}
            categoryImg={plan.categoryImg}
            planTitle={plan.planTitle}
          />
        ))}
      </div>
      <div className="myplan-list end">
        <p className="myplan-list-title">완료한 목표 리스트</p>
        {completedPlans.map((plan, index) => (
          <MyList
            key={index}
            categoryImg={plan.categoryImg}
            planTitle={plan.planTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default MyPlanScreen;
