type ErrorCellProps = {
    err: string
}

const ErrorCell = ({ err }: ErrorCellProps) => {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{err}</td>
            <td></td>
        </tr>
    )
}

export default ErrorCell
