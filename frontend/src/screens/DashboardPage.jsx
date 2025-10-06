import React, { useEffect, useState } from 'react';
import { UserCircleIcon, StarIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import config from '../constants.js';

const DashboardPage = ({ user, foods, onLogout, onLoadFoods, onCreateReview }) => {
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', foodId: '' });
  const [selectedFoodId, setSelectedFoodId] = useState(null);

  useEffect(() => {
    onLoadFoods();
  }, [onLoadFoods]);

  const handleCreateReview = (e) => {
    e.preventDefault();
    if (!newReview.foodId || !newReview.comment) {
      alert('Please select a food and write a comment.');
      return;
    }
    onCreateReview(newReview);
    setNewReview({ rating: 5, comment: '', foodId: '' });
    setSelectedFoodId(null);
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Purrfect Eats Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, {user?.name}!</p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`${config.BACKEND_URL}/admin`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Admin
            </a>
            <button 
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-colors shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Cat Food Products</h2>
            {foods.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
                <p>No food products found. An admin needs to add some first!</p>
              </div>
            ) : (
              foods.map(food => (
                <div key={food.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {food.photo?.small?.url && 
                        <img src={food.photo.small.url} alt={food.name} className="h-24 w-24 object-cover rounded-md" />
                      }
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-indigo-600">{food.brand?.name}</p>
                            <h3 className="text-lg font-bold text-gray-900">{food.name}</h3>
                            <p className="text-sm text-gray-500">{food.flavor} ({food.foodType})</p>
                          </div>
                          <button 
                            onClick={() => {
                              setSelectedFoodId(food.id);
                              setNewReview({ ...newReview, foodId: food.id });
                            }}
                            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-semibold"
                          >
                            <PlusCircleIcon className="h-5 w-5" />
                            Add Review
                          </button>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{food.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Reviews ({food.reviews?.length || 0})</h4>
                      <div className="space-y-3 max-h-40 overflow-y-auto">
                        {food.reviews && food.reviews.length > 0 ? (
                          food.reviews.map(review => (
                            <div key={review.id} className="flex items-start gap-3">
                              <UserCircleIcon className="h-8 w-8 text-gray-400" />
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="text-sm font-semibold text-gray-800">{review.author?.name}</p>
                                  <StarRating rating={review.rating} />
                                </div>
                                <p className="text-sm text-gray-600">{review.comment}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">No reviews yet. Be the first!</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Submit a Review</h2>
              <form onSubmit={handleCreateReview} className="space-y-4">
                <div>
                  <label htmlFor="food" className="block text-sm font-medium text-gray-700">Food</label>
                  <select
                    id="food"
                    value={selectedFoodId || ''}
                    onChange={(e) => {
                      setSelectedFoodId(e.target.value);
                      setNewReview({ ...newReview, foodId: e.target.value });
                    }}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  >
                    <option value="" disabled>Select a food to review</option>
                    {foods.map(food => (
                      <option key={food.id} value={food.id}>{food.name} - {food.brand?.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                   <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                        className={`h-7 w-7 cursor-pointer ${i < newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                  <textarea
                    id="comment"
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="What did your cat think?"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
