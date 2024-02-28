const SkeletonRow = () => {
    return (
        <tr className="list__body-skeleton">
            <td data-cell="ikona" className="list__skeleton-item">
                <div className="skeleton skele-icon"></div>
            </td>

            <td data-cell="nazwa" className="list__skeleton-item">
                <div className="skeleton"></div>
            </td>

            <td data-cell="cena" className="list__skeleton-item">
                <div className="skeleton"></div>
            </td>
            <td data-cell="ostatnie 24h" className="list__skeleton-item">
                <div className="skeleton"></div>
            </td>
            <td
                data-cell="kapitalizacja rynkowa"
                className="list__skeleton-item"
            >
                <div className="skeleton"></div>
            </td>
            <td data-cell="całkowity zasób" className="list__skeleton-item">
                <div className="skeleton"></div>
            </td>
        </tr>
    )
}

export default SkeletonRow
