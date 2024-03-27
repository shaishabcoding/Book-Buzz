import { useContext, useState } from "react";
import { getLocalBooks } from "../../utils/localBook";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { BooksContext } from "../../routes/root/Root";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "#4CAF50",
  "#FF5722",
  "#795548",
  "#607D8B",
  "#9C27B0",
  "#FFEB3B",
  "#3F51B5",
  "#00BCD4",
  "#FF9800",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
const ReadBookCart = () => {
  const [readBookIds] = useState(getLocalBooks("read"));
  const books = useContext(BooksContext);
  const readBooks = books.filter((book) => readBookIds.includes(book.bookId));
  return (
    <div className="bg-gray-50 rounded-lg py-16 px-6 flex items-center justify-center overflow-hidden drop-shadow-sm m-4 lg:mx-0 mb-4 lg:mb-16">
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart
          data={readBooks}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReadBookCart;
