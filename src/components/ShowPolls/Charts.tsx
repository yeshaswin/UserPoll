import React from "react";
import ReactEcharts from "echarts-for-react";

const Chart = (props): JSX.Element => {

  const optionsArray: any[] = []
  props.poll.questions.map((question) => {
    const getOptions = () => ({
      title: {
        text: question.label,
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        bottom: "bottom",

        data: question.options.map(function (option) { return option.value })
      },
      series: [
        {
          name: question.label,
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: question.options.map(function (option) { return { name: option.value, value: option.users.length } }),
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    })
    optionsArray.push(getOptions)
  })

  return (
    <div>
      {
        optionsArray.map((getOptions, index) => {
          return (
            <ReactEcharts option={getOptions()} style={{ height: 300 }} key={index} />

          )
        })
      }



    </div>
  );
}
export default Chart;
