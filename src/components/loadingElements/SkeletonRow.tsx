const SkeletonRow = () => {
    return (
        <tr className="list__skeleton">
            <td data-cell="nazwa" className="list__skeleton-item">
                <span></span>
            </td>

            <td data-cell="cena" className="list__skeleton-item">
                <span></span>
            </td>
            <td data-cell="ostatnie 24h" className="list__skeleton-item">
                <span></span>
            </td>
            <td
                data-cell="kapitalizacja rynkowa"
                className="list__skeleton-item"
            >
                <span></span>
            </td>
            <td data-cell="całkowity zasób" className="list__skeleton-item">
                <span></span>
            </td>
        </tr>
    )
}

export default SkeletonRow

// TODO!! skeleton loading go listu krypto
