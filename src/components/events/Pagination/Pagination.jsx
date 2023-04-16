import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Button2({ content, onClick, active, disabled, classes }) {
    return (
        <button
            className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
      ${
          active
              ? "bg-[#FDA855] text-white"
              : "text-black-100 border border-black-100 border-2"
      }
      ${
          !disabled
              ? "hover:bg-[#FDA855] hover:text-white"
              : "text-white cursor-not-allowed"
      }
      ${classes}
      `}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}

function PaginationNav1({
    gotoPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageIndex,
}) {
    const renderPageLinks = useCallback(() => {
        if (pageCount === 0) return null;
        const visiblePageButtonCount = 3;
        let numberOfButtons =
            pageCount < visiblePageButtonCount
                ? pageCount
                : visiblePageButtonCount;
        const pageIndices = [pageIndex];
        numberOfButtons--;
        [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
            const pageNumberBefore = pageIndices[0] - 1;
            const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
            if (
                pageNumberBefore >= 0 &&
                (itemIndex < numberOfButtons / 2 ||
                    pageNumberAfter > pageCount - 1)
            ) {
                pageIndices.unshift(pageNumberBefore);
            } else {
                pageIndices.push(pageNumberAfter);
            }
        });
        return pageIndices.map((pageIndexToMap) => (
            <li key={pageIndexToMap}>
                <Button2
                    content={pageIndexToMap + 1}
                    onClick={() => gotoPage(pageIndexToMap)}
                    active={pageIndex === pageIndexToMap}
                />
            </li>
        ));
    }, [pageCount, pageIndex, gotoPage]);
    return (
        <ul className='flex gap-2'>
            <li>
                <Button2
                    classes='!rounded-full bg-[#1A1A1A40] hover:bg-[#1A1A1AB2] text-white border-none mr-3'
                    content={
                        <div className='flex ml-1'>
                            <FaChevronLeft size='0.8rem' />
                            <FaChevronLeft
                                size='0.8rem'
                                className='-translate-x-1/2'
                            />{" "}
                        </div>
                    }
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                />
            </li>
            {renderPageLinks()}
            <li>
                <Button2
                    classes='!rounded-full bg-[#1A1A1A40] hover:bg-[#1A1A1AB2] !text-white border-none ml-3'
                    content={
                        <div className='flex ml-1'>
                            <FaChevronRight size='0.8rem' />
                            <FaChevronRight
                                size='0.8rem'
                                className='-translate-x-1/2'
                            />
                        </div>
                    }
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                />
            </li>
        </ul>
    );
}

function Pagination() {
    const [pageIndex, setPageIndex] = useState(0);
    const pageCount = 10;
    return (
        <div className='flex gap-3 flex-wrap p-6 py-12 justify-center'>
            <PaginationNav1
                gotoPage={setPageIndex}
                canPreviousPage={pageIndex > 0}
                canNextPage={pageIndex < pageCount - 1}
                pageCount={pageCount}
                pageIndex={pageIndex}
            />
        </div>
    );
}

export default Pagination;
