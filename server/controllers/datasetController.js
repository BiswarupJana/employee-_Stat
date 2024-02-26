const Dataset = require('../models/dataModel');
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

const catchAsync = require("../utils/catchAsync");

exports.getAllData= factory.getAll(Dataset);
exports.getData = factory.getOne(Dataset);
exports.createData = factory.createOne(Dataset);
exports.updateData = factory.updateOne(Dataset);
exports.deleteData = factory.deleteOne(Dataset);

exports.getDepartmentSalaryStatistics = catchAsync(async (req, res, next) => {
    const departmentName = req.params.departmentName;
    

    // Validate department name
    if (!['Engineering', 'Banking', 'Operations', 'Administration'].includes(departmentName)) {
        return next(new AppError("Invalid department name", 400));
    }

    const statistics = await Dataset.aggregate([
        {
            $match: { department: departmentName }
        },
        {
            $group: {
                _id: null,
                avgSalary: { $avg: "$salary" },
                minSalary: { $min: "$salary" },
                maxSalary: { $max: "$salary" }
            }
        }
    ]);

    if (statistics.length === 0) {
        return next(new AppError(`No data found for department ${departmentName}`, 404));
    }

    res.status(200).json({
        status: "success",
        data: {
            department: departmentName,
            statistics: statistics[0]
        }
    });
});

exports.getDatasetSalaryStatistics = catchAsync(async (req, res, next) => {
        const stat = await Dataset.aggregate([
        
        {
            $group: {
                _id: null,
                avgSalary: { $avg: "$salary" },
                minSalary: { $min: "$salary" },
                maxSalary: { $max: "$salary" }
            }
        }
    ]);

    if (stat.length === 0) {
        return next(new AppError("No data found", 404));
    }

    res.status(200).json({
        status: "success",
        data: {
            statistics: stat[0]
        }
    });
});

exports.getOnContractStatistics = catchAsync(async (req, res, next) => {
    const stat = await Dataset.aggregate([
    {
        $match: { on_contract: true }
    },
    {
        $group: {
            _id: null,
            avgSalary: { $avg: "$salary" },
            minSalary: { $min: "$salary" },
            maxSalary: { $max: "$salary" }
        }
    }
]);

if (stat.length === 0) {
    return next(new AppError("No data found", 404));
}

res.status(200).json({
    status: "success",
    data: {
        statistics: stat[0]
    }
});
});