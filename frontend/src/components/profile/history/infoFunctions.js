function countTimer(info) {
  const start = new Date(info.createdAt);
  const end = new Date();
  const totalDiff = new Date(end - start);

  const diffInMs = new Date(end) - new Date(start);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 1) {
    return `Há ${diffInDays} dia atrás`;
  } else if (diffInDays > 1) {
    return `Há ${diffInDays} dias atrás`;
  } else if (totalDiff.getUTCHours() < 1 && totalDiff.getUTCMinutes() < 6) {
    return "Agora mesmo";
  } else if (totalDiff.getUTCHours() < 1) {
    let diff = totalDiff.getUTCMinutes() + "min ";

    return `Há ${diff} atrás`;
  } else if (totalDiff.getUTCHours() === 1) {
    let diff = totalDiff.getUTCHours() + " hora ";

    return `Há ${diff} atrás`;
  } else if (totalDiff.getUTCHours() > 1) {
    let diff = totalDiff.getUTCHours() + " horas ";

    return `Há ${diff} atrás`;
  }

  return "empty";
}

function searchPosterPath(info) {
  if (info?.type === "LIKED") {
    return `${info.MovieFavorits[0]?.tmbdPoster_path}`;
  } else if (info?.type === "PLANNING") {
    return `${info.PlaningSee[0]?.tmbdPoster_path}`;
  } else if (info?.type === "WATCHED") {
    return `${info.Watched[0]?.tmbdPoster_path}`;
  }
}

const infoFunctions = {
  countTimer,
  searchPosterPath,
};

export default infoFunctions;
