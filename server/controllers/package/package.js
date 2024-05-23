import Package from "../../models/Package.js";
import User from "../../models/User.js";

const apiv1AddPackage = async (req, res) => {
    const { packageName, features, price,userId} = req.body;

    if (!packageName || !features || !price || !userId) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    let newPackage

    try {
        newPackage = new Package({ packageName, features, price, userId});
        await newPackage.save();
    } catch (error) {
        console.error("Error saving package:", error);
        return res.status(500).json({ message: "Error saving package" });
    }

    return res.status(200).json({ message: "Package created successfully", package: newPackage });
};

const apiV1AllPackages = async (req, res) => {
    let packages;

    try {
        packages = await Package.find();
    } catch (error) {
        console.error("Error fetching packages:", error);
        return res.status(500).json({ message: "Error fetching packages" });
    }

    return res.status(200).json({ packages });
}

const apiV1GetPackage = async (req, res) => {
    const { id } = req.params;
    let foundPackage;

    try {
        foundPackage = await Package.findById(id);
    } catch (error) {
        console.error("Error fetching package:", error);
        return res.status(500).json({ message: "Error fetching package" });
    }

    if (!foundPackage) {
        return res.status(404).json({ message: "Package not found" });
    }

    return res.status(200).json({ package: foundPackage });
}

const apiV1UpdatePackage = async (req, res) => {
    const { id } = req.params;
    const { packageName, description, price } = req.body;

    console.log("ID:", id); 

    if (!packageName || !description || !price) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    let updatedPackage;

    try {
        updatedPackage = await Package.findByIdAndUpdate(id, { packageName, description, price }, { new: true });
    } catch (error) {
        console.error("Error updating package:", error);
        return res.status(500).json({ message: "Error updating package" });
    }

    return res.status(200).json({ message: "Package updated successfully", package: updatedPackage });
}

const apiV1GetPackageByUserId = async (req, res) => {
    const { userId } = req.params;
    let packages;

    try {
        packages = await Package.find({ user: userId });
    } catch (error) {
        console.error("Error fetching packages:", error);
        return res.status(500).json({ message: "Error fetching packages" });
    }

    return res.status(200).json({ packages });
}

export { apiv1AddPackage, apiV1AllPackages, apiV1UpdatePackage,apiV1GetPackage, apiV1GetPackageByUserId };
