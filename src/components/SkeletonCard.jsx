import React from 'react'

const SkeletonCard = () => {
    return (
        <div className="w-full max-w-sm bg-gray-200 rounded-lg animate-pulse flex items-center justify-center flex-col">
            <div className="h-36 bg-gray-300 rounded w-3/4  mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-5 bg-gray-400 rounded w-1/3 mb-4"></div>
            <div className="h-14 bg-gray-300 rounded"></div>
        </div>
    )
}

export default SkeletonCard
