import React, { useState } from 'react'
import { Layout } from '@/components/custom/layout'
import { TopNav } from '@/components/top-nav'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

// Sample data for users
const initialUsers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Driver',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Admin',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Worker',
    email: 'alice.johnson@example.com',
    phone: '456-789-0123',
  },
  {
    id: 4,
    name: 'Bob Brown',
    role: 'Driver',
    email: 'bob.brown@example.com',
    phone: '321-654-9870',
  },
]

const UserCategories = ['All', 'Drivers', 'Admins', 'Workers']

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState(initialUsers)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [showAddUserForm, setShowAddUserForm] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
  })

  const handleAddUser = () => {
    if (newUser.name && newUser.role && newUser.email && newUser.phone) {
      setUsers([...users, { id: users.length + 1, ...newUser }])
      setNewUser({ name: '', role: '', email: '', phone: '' })
      setShowAddUserForm(false)
    } else {
      alert('Please fill out all fields')
    }
  }

  const usersByRole: {
    [key: string]: {
      id: number
      name: string
      role: string
      email: string
      phone: string
    }[]
  } = {
    Drivers: users.filter((user) => user.role === 'Driver'),
    Admins: users.filter((user) => user.role === 'Admin'),
    Workers: users.filter((user) => user.role === 'Worker'),
  }

  return (
    <Layout>
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>
      <Layout.Body>
        <div className='flex flex-col p-6 md:flex-row'>
          {/* Sidebar for Categories */}
          <aside className='mb-6 rounded-lg p-4 md:mb-0 md:w-1/4'>
            <Card>
              <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {UserCategories.map((category) => (
                    <li
                      key={category}
                      className={`cursor-pointer rounded-lg p-2 transition duration-300 hover:bg-gray-100 ${selectedCategory === category ? 'bg-gray-200 font-semibold' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Main Users List */}
          <main className='md:w-3/4'>
            <div className='mb-4 flex items-center justify-between'>
              <h1 className='text-2xl font-bold'>Users Management</h1>
              <button
                onClick={() => setShowAddUserForm(!showAddUserForm)}
                className='rounded-lg border border-blue-700 bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700'
              >
                {showAddUserForm ? 'Cancel' : 'Add User'}
              </button>
            </div>

            {/* Add User Form */}
            {showAddUserForm && (
              <Card className='mb-6 rounded-lg border border-gray-300 shadow-sm'>
                <CardHeader>
                  <CardTitle className='text-lg font-semibold'>
                    Add New User
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div>
                      <label className='mb-1 block font-semibold'>Name</label>
                      <input
                        type='text'
                        value={newUser.name}
                        onChange={(e) =>
                          setNewUser({ ...newUser, name: e.target.value })
                        }
                        className='w-full rounded-lg border border-gray-300 p-3'
                        placeholder='User Name'
                      />
                    </div>
                    <div>
                      <label className='mb-1 block font-semibold'>Role</label>
                      <select
                        value={newUser.role}
                        onChange={(e) =>
                          setNewUser({ ...newUser, role: e.target.value })
                        }
                        className='w-full rounded-lg border border-gray-300 p-3'
                      >
                        <option value='' disabled>
                          Select Role
                        </option>
                        <option value='Driver'>Driver</option>
                        <option value='Admin'>Admin</option>
                        <option value='Worker'>Worker</option>
                      </select>
                    </div>
                    <div>
                      <label className='mb-1 block font-semibold'>Email</label>
                      <input
                        type='email'
                        value={newUser.email}
                        onChange={(e) =>
                          setNewUser({ ...newUser, email: e.target.value })
                        }
                        className='w-full rounded-lg border border-gray-300 p-3'
                        placeholder='User Email'
                      />
                    </div>
                    <div>
                      <label className='mb-1 block font-semibold'>Phone</label>
                      <input
                        type='text'
                        value={newUser.phone}
                        onChange={(e) =>
                          setNewUser({ ...newUser, phone: e.target.value })
                        }
                        className='w-full rounded-lg border border-gray-300 p-3'
                        placeholder='User Phone'
                      />
                    </div>
                    <button
                      onClick={handleAddUser}
                      className='rounded-lg border border-blue-700 bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700'
                    >
                      Add User
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Display Users Based on Selected Category */}
            {selectedCategory === 'All' ? (
              UserCategories.slice(1).map((category) => (
                <section key={category} className='mb-8'>
                  <Card className='rounded-lg border border-gray-300 shadow-sm'>
                    <CardHeader>
                      <CardTitle className='text-lg font-semibold'>
                        {category} Users
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className='space-y-4'>
                        {usersByRole[category].length > 0 ? (
                          usersByRole[category].map((user) => (
                            <li
                              key={user.id}
                              className='rounded-lg border border-gray-300 bg-white p-4 shadow-sm'
                            >
                              <div className='flex flex-col md:flex-row md:justify-between'>
                                <div>
                                  <h2 className='text-xl font-semibold'>
                                    {user.name}
                                  </h2>
                                  <p className='text-gray-600'>{user.role}</p>
                                </div>
                                <div className='mt-2 md:mt-0'>
                                  <p className='text-gray-500'>{user.email}</p>
                                  <p className='text-gray-500'>{user.phone}</p>
                                </div>
                              </div>
                            </li>
                          ))
                        ) : (
                          <p className='text-center text-gray-500'>
                            No users found
                          </p>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </section>
              ))
            ) : (
              <section className='mb-8'>
                <Card className='rounded-lg border border-gray-300 shadow-sm'>
                  <CardHeader>
                    <CardTitle className='text-lg font-semibold'>
                      {selectedCategory} Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-4'>
                      {usersByRole[selectedCategory].length > 0 ? (
                        usersByRole[selectedCategory].map((user) => (
                          <li
                            key={user.id}
                            className='rounded-lg border border-gray-300 bg-white p-4 shadow-sm'
                          >
                            <div className='flex flex-col md:flex-row md:justify-between'>
                              <div>
                                <h2 className='text-xl font-semibold'>
                                  {user.name}
                                </h2>
                                <p className='text-gray-600'>{user.role}</p>
                              </div>
                              <div className='mt-2 md:mt-0'>
                                <p className='text-gray-500'>{user.email}</p>
                                <p className='text-gray-500'>{user.phone}</p>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <p className='text-center text-gray-500'>
                          No users found
                        </p>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            )}
          </main>
        </div>
      </Layout.Body>
    </Layout>
  )
}

export default UsersPage

const topNav = [
  {
    title: 'Overview',
    href: '/',
    isActive: false,
  },
  {
    title: 'Users',
    href: '/users',
    isActive: true,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
]
