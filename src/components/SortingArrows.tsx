type SortingArrowsProps = {
    sorted: string
}

const SortingArrows = ({ sorted }: SortingArrowsProps) => {
    return (
        <span className="sorting__arrows">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f0f0f0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`feather feather-chevron-up ${sorted == 'asc' && 'sorted'}`}
            >
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f0f0f0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`feather feather-chevron-down ${sorted == 'desc' && 'sorted'}`}
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    )
}

export default SortingArrows
