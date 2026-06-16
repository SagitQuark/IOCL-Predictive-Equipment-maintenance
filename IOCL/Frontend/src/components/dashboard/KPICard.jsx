function KPICard({ title, value }) {
  return (
    <div className="bg-slate-800 border border-slate-700 hover:bg-slate-800 rounded-xl p-5">
      <p className="text-slate-400 text-sm">{title}</p>

      <h3 className="text-3xl font-bold text-white mt-2">
        {value}
      </h3>
    </div>
  );
}

export default KPICard;