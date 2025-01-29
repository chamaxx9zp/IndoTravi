import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react'

function SearchComponent() {
    const [searchForm, setSearchForm] = useState({
        date: '',
        budget: '',
        guests: ''
      })
      const [activeDropdown, setActiveDropdown] = useState(null)
    
      const handleSearch = () => {
        console.log('Search params:', searchForm)
        alert(`Searching with parameters:\nDate: ${searchForm.date}\nBudget: ${searchForm.budget}\nGuests: ${searchForm.guests}`)
        setActiveDropdown(null);
        setSearchForm({
          date: '',
          budget: '',
          guests: ''
        });
      }
      const handleDropdownSelect = (type, value) => {
        setSearchForm(prev => ({ ...prev, [type]: value }))
        setActiveDropdown(null)
      }
    
      const dates = ['Next Week', 'Next Month', 'In 3 Months', 'Custom']
      const budgets = ['$0 - $100', '$100 - $200', '$200 - $500', '$500+']
      const guestOptions = ['1 Guest', '2 Guests', '3-4 Guests', '5+ Guests']
    
  return (
    <>
         <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md p-4 md:rounded-full rounded-3xl flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <button 
                className="w-full text-white p-3 md:rounded-full rounded-2xl flex items-center justify-between hover:bg-white/25 transition-colors duration-200 mx-2"
                onClick={() => setActiveDropdown(activeDropdown === 'date' ? null : 'date')}>
                <span className='gap-2 flex items-center'><CalendarMonthIcon />{searchForm.date || 'Date'}</span>
                <svg className={`w-5 h-5 transform transition-transform duration-200 ${activeDropdown === 'date' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="block md:hidden w-full h-[1px] bg-white/30 my-2"></div>
              {activeDropdown === 'date' && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 origin-top">
                  {dates.map((date) => (
                    <div 
                      key={date}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200 md:rounded-full"
                      onClick={() => handleDropdownSelect('date', date)}>
                      {date}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex-1 relative">
            <div className="hidden md:block w-[1px] bg-white h-full absolute left-0 top-0" />
              <button 
                className="w-full text-white p-3 md:rounded-full rounded-2xl flex items-center justify-between hover:bg-white/25 transition-colors duration-200 mx-2"
                onClick={() => setActiveDropdown(activeDropdown === 'budget' ? null : 'budget')}>
                <span className='gap-2 flex items-center'> <AccountBalanceWalletIcon />{searchForm.budget || 'Budget'}</span>
                <svg className={`w-5 h-5 transform transition-transform duration-200 ${activeDropdown === 'budget' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="block md:hidden w-full h-[1px] bg-white/30 my-2"></div>
              {activeDropdown === 'budget' && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 origin-top">
                  {budgets.map((budget) => (
                    <div 
                      key={budget}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200 md:rounded-full"
                      onClick={() => handleDropdownSelect('budget', budget)}>
                      {budget}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex-1 relative">
            <div className="hidden md:block w-[1px] bg-white h-full absolute left-0 top-0" />
              <button 
                className="w-full text-white p-3 md:rounded-full rounded-2xl flex items-center justify-between hover:bg-white/25 transition-colors duration-200 mx-2"
                onClick={() => setActiveDropdown(activeDropdown === 'guests' ? null : 'guests')}>
                <span className='gap-2 flex items-center'><PersonOutlineIcon />{searchForm.guests || 'Guest'}</span>
                <svg className={`w-5 h-5 transform transition-transform duration-200 ${activeDropdown === 'guests' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="block md:hidden w-full h-[1px] bg-white/30 my-2"></div>
              {activeDropdown === 'guests' && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 origin-top">
                  {guestOptions.map((option) => (
                    <div 
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-200 md:rounded-full"
                      onClick={() => handleDropdownSelect('guests', option)}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button 
              onClick={handleSearch}
              className="bg-white text-black px-8 py-3 md:rounded-full rounded-2xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg transform hover:scale-105">
              Search
            </button>
          </div>
    </>
  )
}

export default SearchComponent