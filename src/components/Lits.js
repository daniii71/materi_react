function List() {
    const cars = ['BMW', 'Ayla', 'Volvo'];
    const users = [
        {
            username: "Irvanda",
            email: 'email@gmail.com',
            nama: 'fhewf'
        },
        {
            username: "Azizi",
            email: 'email@gmail.com',
            nama: 'ndauwdaeswdd',
        },
        {
            username: "Nizar",
            email: 'email@gmail.com',
            nama: 'yresgf',
        },
        {
            username: "Lintang",
            email: 'email@gmail.com',
            nama: 'wwwwds',
        },
        
    ];
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.nama}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;