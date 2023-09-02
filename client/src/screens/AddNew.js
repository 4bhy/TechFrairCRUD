import React, { useState } from 'react'
import { addVehicle } from '../actions/adminActions';
import { useDispatch } from 'react-redux';

const AddNew = () => {

    const dispatch= useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        manufacturer: '',
        model: '',
        price: '',
        quantity: '',
    });
    const [recfile, setRecfile] = useState([]);

    // Handle file input for images
    const handleImageChange = (event) => {
        const newRecfile = Array.from(event.target.files);
        setRecfile([...recfile, ...newRecfile]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formDataToSend = new FormData();

        // Append form data fields
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('manufacturer', formData.manufacturer);
        formDataToSend.append('model', formData.model);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('quantity', formData.quantity);

        // Append image files
        recfile.forEach((image) => {
            formDataToSend.append('recfile', image);
        });

        dispatch(addVehicle(formDataToSend))
    };

    return (
        <>
            <div class="bg-gray-900 min-h-screen flex items-center justify-center">
                <div class="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
                    <div class="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
                        <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                            <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </a>
                            {/* <!-- Active: bg-gray-800 text-white, Not active: text-white/50 --> */}
                            <a class="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </a>
                            <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </nav>
                        <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                            <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                    <div class="flex-1 px-3 sm:px-0">
                        <div class="p-8">
                            <div class="max-w-md mx-auto bg-gray-700 rounded-lg overflow-hidden md:max-w-lg">
                                <div class="md:flex">
                                    <div class="w-full">
                                        <div class="p-4">
                                            <span class="text-lg font-bold text-white">Add New Vehicle</span>
                                        </div>

                                        <form class="p-3" onSubmit={handleSubmit} encType="multipart/form-data">
                                            <div class="mb-3">
                                                <span class="text-sm text-white">Name</span>
                                                <input type="text"
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    class="h-12 px-3 w-full  bg-gray-400 rounded focus:outline-none focus:border-gray-300" />
                                            </div>
                                            <div class="mb-3">
                                                <span class="text-sm text-white">Description</span>
                                                <input type="text"
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                    class="h-12 px-3 w-full  bg-gray-400 rounded focus:outline-none focus:border-gray-300" rows="4" />
                                            </div>
                                            <div class="grid grid-cols-2 gap-4">
                                                <div class="mb-3">
                                                    <span className="text-white">Manufacturer</span>
                                                    <select
                                                        onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                                                        value={formData.manufacturer}
                                                        class="h-12 px-3 w-full bg-gray-400 rounded focus:outline-none focus:border-gray-300">
                                                        <option value="">Select</option>
                                                        <option value="Yamaha">Yamaha</option>
                                                        <option value="Suzuki">Suzuki</option>
                                                        <option value="Honda">Honda</option>
                                                        <option value="Kawasaki">Kawasaki</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <span className="text-white">Model</span>
                                                    <select
                                                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                                        value={formData.model}
                                                        class="h-12 px-3 w-full bg-gray-400 rounded focus:outline-none focus:border-gray-300">
                                                        <option value="">Select</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4">
                                                <div class="mb-3">
                                                    <span class="text-sm text-white">Price</span>
                                                    <input type="number"
                                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                        class="h-12 px-3 w-full  bg-gray-400 rounded focus:outline-none focus:border-gray-300" />
                                                </div>
                                                <div class="mb-3">
                                                    <span class="text-sm text-white">Quanitity</span>
                                                    <input type="number"
                                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                                        class="h-12 px-3 w-full  bg-gray-400 rounded focus:outline-none focus:border-gray-300" />
                                                </div>
                                            </div>


                                            <div class="mb-3">
                                                <span className='text-white'>Attachments</span>
                                                <div class="relative rounded-lg border-2  bg-gray-400 flex justify-center items-center hover:cursor-pointer">
                                                    <div class="absolute hover:cursor-pointer">
                                                        <div class="flex flex-col items-center hover:cursor-pointer ">
                                                            <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
                                                            <span class="block text-white font-normal hover:cursor-pointer">Add Images</span>
                                                        </div>
                                                    </div> <input type="file" class="h-full w-full opacity-0" multiple name="recfile" onChange={handleImageChange} />
                                                </div>
                                                <div class="flex justify-between items-center text-gray-400">
                                                    <span className='text-sm'>Maximum 4 Images</span>
                                                    {/* <span class="flex items-center "><i class="fa fa-lock mr-1"></i> secure</span> */}
                                                </div>
                                            </div>
                                            <div class="mt-3 text-center pb-3">
                                                <button class=" h-12 text-lg w-32 bg-gray-800 rounded-2xl text-white hover:bg-gray-900">Submit</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNew
