import Deal from '../../models/Deal.js';
import User from '../../models/User.js';
import Package from '../../models/Package.js';

const apiv1AddDeal = async (req, res) => {
    try {
        const { note, userId } = req.body;
        const { packageId } = req.params;

      

        if (!note || !userId || !packageId) {
            return res.status(400).json({ message: "Please provide all fields" });
        }

        const newDeal = new Deal({ note, userId, packageId });
        await newDeal.save();

        return res.status(201).json({ message: "Deal created successfully", deal: newDeal });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const apiV1AllDeals = async (req, res) => {
    let deals;

    try {
        deals = await Deal.find();
    } catch (error) {
        console.error("Error fetching deals:", error);
        return res.status(500).json({ message: "Error fetching deals" });
    }

    return res.status(200).json({ deals });
};

const apiV1GetDeal = async (req, res) => {
    const { id } = req.params;
    let deal;

    try {
        deal = await Deal.findById(id);
        if (!deal) {
            return res.status(404).json({ message: "Deal not found" });
        }
        return res.status(200).json({ deal });
    } catch (error) {
        console.error("Error fetching deal:", error);
        return res.status(500).json({ message: "Error fetching deal" });
    }
};

const apiV1UpdateDeal = async (req, res) => {
    const { id } = req.params;
    const { amount, note } = req.body;

    try {
       
        if (!amount || !note) {
            return res.status(400).json({ message: "Please provide all fields" });
        }

       
        const updatedDeal = await Deal.findByIdAndUpdate(id, { amount, note }, { new: true });

        
        if (!updatedDeal) {
            return res.status(404).json({ message: "Deal not found" });
        }

        return res.status(200).json({ message: "Deal updated successfully", deal: updatedDeal });
    } catch (error) {
        
        console.error("Error updating deal:", error);
        return res.status(500).json({ message: "Error updating deal" });
    }
};

const apiV1GetDealByUserId = async (req, res) => {
    const { userId } = req.params;
    console.log("UserId:", userId);

    const user = await User.findById(userId);

    const userRole = user.role;
    console.log("User role:", userRole);

    console.log("Fetching deals for userId:", userId);
    let deals;

    if(userRole === 'influencer'){
        const influencerPackages = await Package.find({userId: userId});
        const packageIds = influencerPackages.map(pkg => pkg._id);

        deals = await Deal.find({packageId: {$in: packageIds}});
    }
    else{
        deals = await Deal.find({userId: userId});
    }

    return res.status(200).json({ deals });
};



export { apiv1AddDeal,apiV1AllDeals, apiV1GetDeal, apiV1UpdateDeal, apiV1GetDealByUserId};