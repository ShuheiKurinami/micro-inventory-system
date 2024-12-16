document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const usersTableBody = document.querySelector('#usersTable tbody');

    // ユーザー登録フォームの送信イベント
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = (document.getElementById('name')).value;
        const email = (document.getElementById('email')).value;
        const password = (document.getElementById('password')).value;

        try {
            const response = await fetch('http://localhost:3000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                alert('ユーザーが登録されました');
                registerForm.reset();
                fetchUsers();
            } else {
                const error = await response.json();
                alert(`登録エラー: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('登録中にエラーが発生しました');
        }
    });

    // ユーザー一覧を取得して表示
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users');
            const users = await response.json();
            usersTableBody.innerHTML = '';
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                `;
                usersTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // ページロード時にユーザー一覧を取得
    fetchUsers();
});
