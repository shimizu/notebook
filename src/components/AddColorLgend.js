import * as d3 from "npm:d3";

export function addColorLegend(
    chart,
    colorScale,
    options = { sampleSize: 20, lineSpacing: 1.2, margin: 5, x0: 640, y0: 10 }
) {
    const { sampleSize, lineSpacing, margin, x0, y0 } = options;
    const leg = svg`<g style="font-family:sans-serif; font-size:x-small; ">`;
    const domain = colorScale.domain();
    const range = colorScale.range();
    domain.forEach((label, i) => {
        const x = x0;
        const y = y0 + sampleSize * lineSpacing * i;
        const group = svg`<g transform='translate(${x},${y})'>`;
        leg.append(group);
        group.append(
            svg`<rect fill=${range[i % range.length]
                } width=${sampleSize} height=${sampleSize}>`
        );
        group.append(
            svg`<text text-anchor=start dx=${sampleSize + margin} dy=${sampleSize *
                0.7}>${label}</text>`
        );
    });
    if (chart.nodeName === "svg") chart.append(leg);
    else
        d3.select(chart)
            .select("svg")
            .append(() => leg);
    return chart;
}