type ErrorCellProps = {
    err: string
}

const ErrorCell = ({ err }: ErrorCellProps) => {
    return (
        <tr className="list__body-error">
            <td className="err-cell h4" colSpan={6}>
                {err}
            </td>
        </tr>
    )
}

export default ErrorCell
