import { useMemo, useEffect, useContext } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import Image from "next/image";
import Paginate from "@/components/Tables/utils/Paginate";
import AppContext from "@/AppContext";
import ProgressBar from "@/components/Home/CreateSurvey/utils/ProgressBar";
// import Dropdown from "../Dropdown";

// Define a default UI for filtering
function DefaultColumnFilter({ column: { Header, filterValue, setFilter } }) {
  return (
    <input
      className="border-0 rounded-lg focus:outline-none"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search with ${Header.toLowerCase()}`}
    />
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      className="border-0 rounded-lg focus:outline-none h-10 w-48 pl-4 ml-4 border-r-8 border-transparent"
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">Status</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

// Our table component
function Table({ columns, data }) {
  const filterTypes = useMemo(
    () => ({
      // Override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
    setPageSize,
    filteredRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    },
    useFilters, // useFilters!
    usePagination
  );

  let SurveyName = headerGroups[0].headers[0];
  let Status = headerGroups[0].headers[3];

  useEffect(() => {
    setPageSize(5);
  }, []);

  return (
    <Paginate
      canPreviousPage={canPreviousPage}
      canNextPage={canNextPage}
      pageOptions={pageOptions}
      pageCount={pageCount}
      gotoPage={gotoPage}
      nextPage={nextPage}
      previousPage={previousPage}
      pageIndex={pageIndex}
      pageSize={pageSize}
      filteredRows={filteredRows}
    >
      <div className="w-full flex flex-col">
        <div className="flex h-12 my-4 items-center">
          <div className="ml-4 border border-gray-300 h-10 flex rounded-md">
            <Image
              className="ml-4 mr-2"
              src="/search-icon.svg"
              width={13.5}
              height={13.5}
            />
            {SurveyName.canFilter ? SurveyName.render("Filter") : null}
          </div>
          <div>{Status.canFilter ? Status.render("Filter") : null}</div>
        </div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Paginate>
  );
}

function App() {
  const { surveyData } = useContext(AppContext);

  const columns = useMemo(
    () => [
      {
        Header: "SURVEY NAME",
        accessor: "survey_name",
      },
      {
        Header: "COMPLETION RATE",
        accessor: "completion_rate",
        Cell: (props) => {
          let status = props.row.original.status;
          let value = props.value;

          let color = "";

          if (status === "Completed") {
            color = "#31C48D";
          } else if (status === "Active") {
            color = "#AC94FA";
          } else if (status === "Paused") {
            color = "#EF5350";
          } else if (status === "Draft") {
            color = "#76A9FA";
          }

          return (
            <div className="flex flex-col h-2/3 justify-around items-start">
              <span className="text-gray-500">{value}%</span>
              <ProgressBar barColor={color} progress={value} constant={1} />
            </div>
          );
        },
      },
      {
        Header: "PARTICIPANTS",
        accessor: "people",
        Cell: ({ value }) => <span>{value.length}</span>,
      },
      {
        Header: "STATUS",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "includes",
        Cell: ({ value }) => {
          let statusColor = "";
          if (value === "Completed") {
            statusColor = "bg-green-100 text-green-800";
          } else if (value === "Active") {
            statusColor = "bg-purple-100 text-purple-800";
          } else if (value === "Paused") {
            statusColor = "bg-red-100 text-red-800";
          } else if (value === "Draft") {
            statusColor = "bg-blue-100 text-blue-800";
          }

          return (
            <span
              className={
                "border-0 rounded-lg px-4 py-2 font-medium " + statusColor
              }
            >
              {value}
            </span>
          );
        },
      },
      {
        Header: "REPORT",
        accessor: "reportLink",
        Cell: ({ value }) => {
          return (
            <a
              href={value}
              target="_blank"
              className="border-2 border-gray-800 rounded-lg px-4 py-2 font-medium flex w-40 justify-between"
            >
              View Report
              <Image src="/arrow-icon.svg" width={16} height={16} />
            </a>
          );
        },
      },
    ],
    []
  );

  return <Table columns={columns} data={surveyData} />;
}

export default App;
